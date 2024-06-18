## 1 在这个配置中，module 有哪些选项？

在 TypeScript 的 `tsconfig.json` 文件中，`module` 选项用于指定生成模块的方式。根据不同的运行环境和需求，可以选择不同的模块系统。下面是一些常用的 `module` 选项及其含义：

1. **"CommonJS"**: 使用 CommonJS 模块系统，适用于 Node.js 环境和旧版的浏览器环境。生成的代码会使用 `require()` 和 `module.exports`。

   ```json
   "module": "CommonJS"
   ```

2. **"AMD"**: 使用 AMD (Asynchronous Module Definition) 模块系统，适用于需要异步加载模块的浏览器环境。

   ```json
   "module": "AMD"
   ```

3. **"UMD"**: 使用 UMD (Universal Module Definition) 模块系统，可以在多种环境（如浏览器、Node.js）中使用，支持多种模块加载方式。

   ```json
   "module": "UMD"
   ```

4. **"ES6"** 或 **"ES2015"**: 使用 ES6 模块系统，适用于现代浏览器和支持 ES6 模块的 Node.js 环境。生成的代码使用 `import` 和 `export`。

   ```json
   "module": "ES6"
   ```

5. **"ESNext"**: 使用最新的 ECMAScript 模块系统（当前 ES2023 或更高版本），支持最新的 JavaScript 特性和模块语法。

   ```json
   "module": "ESNext"
   ```

6. **"System"**: 使用 SystemJS 模块系统，适用于浏览器环境。

   ```json
   "module": "System"
   ```

7. **"None"**: 不生成模块化的代码，所有 TypeScript 输出将合并为一个文件。

   ```json
   "module": "None"
   ```

8. **"Node12"**、**"Node14"**、**"Node16"**：针对 Node.js 环境的特定版本进行优化的选项。

   ```json
   "module": "Node16"
   ```

这些选项允许你根据项目的需求选择最合适的模块系统来生成 TypeScript 的输出代码。


## 2. moduleResolution 有哪些选项？

在 TypeScript 的 `tsconfig.json` 文件中，`moduleResolution` 选项用于指定模块解析策略，即 TypeScript 编译器用来查找和解析模块路径的方式。以下是常用的 `moduleResolution` 选项及其含义：

1. **"Node"**: 使用 Node.js 的模块解析策略。这是默认值，适用于 Node.js 环境。

   ```json
   "moduleResolution": "Node"
   ```

2. **"Classic"**: 使用经典的 TypeScript 模块解析策略。适用于较旧版本的 JavaScript 和特定的兼容性需求。

   ```json
   "moduleResolution": "Classic"
   ```

3. **"Node12"**、**"Node14"**、**"Node16"**：针对特定版本的 Node.js 进行优化的选项，通常与相同版本的 `module` 选项一起使用。

   ```json
   "moduleResolution": "Node16"
   ```

这些选项允许你根据项目的特定需求选择合适的模块解析策略，确保 TypeScript 编译器能够正确地查找和处理模块依赖关系。


## 3. module 和 moduleResolution区别


`module` 和 `moduleResolution` 是 TypeScript 中两个不同的配置选项，它们分别用于控制模块生成方式和模块解析方式。

1. **module（模块生成方式）**：
   - **作用**：指定 TypeScript 编译器生成的 JavaScript 代码采用的模块系统。
   - **选项**：可以设置为 `"CommonJS"`, `"AMD"`, `"UMD"`, `"ES6"`, `"ESNext"`, `"System"`, `"None"`, `"Node12"`, `"Node14"`, `"Node16"` 等不同的值。
   - **示例**：例如设置 `"module": "ESNext"` 表示生成的 JavaScript 代码采用 ES6 模块系统，使用 `import` 和 `export`。

2. **moduleResolution（模块解析方式）**：
   - **作用**：指定 TypeScript 编译器在解析模块依赖时使用的策略。
   - **选项**：可以设置为 `"Node"`, `"Classic"`, `"Node12"`, `"Node14"`, `"Node16"` 等不同的值。
   - **示例**：例如设置 `"moduleResolution": "Node"` 表示使用 Node.js 的模块解析策略，适用于 Node.js 环境中的模块解析需求。

**区别总结**：
- **module** 控制 TypeScript 编译器生成的 JavaScript 代码的模块系统格式，影响生成代码的模块化风格。
- **moduleResolution** 控制 TypeScript 编译器在解析 import 语句时查找模块的策略，影响编译器如何定位和处理模块依赖关系。

正确配置这两个选项可以确保 TypeScript 编译器能够根据项目的需求生成和解析模块化的 JavaScript 代码。