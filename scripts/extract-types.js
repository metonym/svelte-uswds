const { walk, parse } = require("svelte/compiler");
const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");
const { format } = require("prettier");

const emptyObject = (obj) => Object.keys(obj).length === 0;
const components = fs.readdirSync("src").filter((_) => _.endsWith(".svelte"));

let types = `
// Type definitions for ${pkg.name} ${pkg.version}
// Project: ${pkg.homepage}

export class UswdsSvelteComponent {
  $$prop_def: {};
  $$slot_def: {};
  $on(eventname: string, handler: (e: Event) => any): () => void;
}\n\n`;

components.forEach((component) => {
  const source = fs.readFileSync(path.join("src", component), "utf-8");

  const api = {
    props: {},
    slots: {},
  };

  walk(parse(source), {
    enter(node) {
      switch (node.type) {
        case "ExportNamedDeclaration":
          const name = node.declaration.declarations[0].id.name;

          if (!node.leadingComments) {
            throw Error(`${component}: "${name}" is missing JSDoc comments.`);
          }

          const leadingComment = node.leadingComments[0];

          let type_comment = "";

          const type = leadingComment.value
            .split("@type ")
            .filter((_) => _.startsWith("{"))[0];

          for (word of type.split(" ")) {
            if (!word.startsWith("[")) {
              type_comment += word;
            } else {
              break;
            }
          }

          api.props[name] = {
            name,
            value: node.declaration.declarations[0].init.raw,
            type: type_comment.substring(1, type_comment.length - 1),
            jsdoc: source.slice(leadingComment.start, leadingComment.end),
          };
          break;
        case "Slot":
          const slot_with_name = node.attributes.find((_) => _.name === "name");
          const slot_name = slot_with_name
            ? slot_with_name.value[0].raw
            : "default";
          api.slots[slot_name] = {};
          break;
      }
    },
  });

  const componentName = component.replace(".svelte", "");

  if (emptyObject(api.props) && emptyObject(api.slots)) {
    types += `export class ${componentName} extends UswdsSvelteComponent { }\n\n`;
  } else {
    let props = "";

    Object.keys(api.props).forEach((key) => {
      const value = api.props[key];

      props += `${value.jsdoc}\n`;
      props += `${value.name}?: ${value.type};\n\n`;
    });

    let slots = "";

    Object.keys(api.slots).forEach((key) => {
      slots += `${key.match(/\-|\s+/g) ? `"${key}"` : key}: {};\n`;
    });

    types += `export class ${componentName} extends UswdsSvelteComponent {
      $$prop_def: { ${props} };

      $$slot_def: { ${slots} };
    }\n\n`;
  }

  console.log(
    `${componentName}: ${Object.keys(api.props).length} prop(s), ${
      Object.keys(api.slots).length
    } slot(s)`
  );
});

fs.writeFileSync("types/index.d.ts", format(types, { parser: "typescript" }));
