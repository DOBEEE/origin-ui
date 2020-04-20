module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        process: true,
        PRODUCTION: true,
        WITHDRAW_FEATURE: true,
        GIT_COMMIT_HASH: true,
    },
    plugins: ['vue'],
    extends: ['prettier', 'eslint:recommended', 'plugin:vue/base'],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    rules: {
        'no-console': 'off',
        // eslint规则配置
        // 强制遵守，error级别
        'for-direction': 'error', // 校验for循环计数方向是否正确
        'no-prototype-builtins': 'error', // 不允许直接使用Object.prototype的原生方法
        'no-template-curly-in-string': 'error', // 字符串中不允许包含${variable}占位符
        'array-callback-return': 'error', // 数组的回调方法必须包含return语句
        'block-scoped-var': 'error', // var变量必须在函数作用域开始部位定义
        'class-methods-use-this': 'error', // 未引用this的类成员方法应定义为static方法
        curly: 'error', // 代码块必须由大括号包裹起来
        'dot-location': ['error', 'property'], // 点操作符必须和property在同一行
        'dot-notation': 'error', // 必须使用点操作符访问对象属性，属性名为变量的除外
        eqeqeq: ['error', 'always'], // 强制使用===和!==作为比较运算符
        'guard-for-in': 'error', // 对象for...in迭代中需要过滤掉原型上的属性
        'no-alert': 'error', // 不允许使用alert
        'no-caller': 'error', // 不允许使用caller或者callee
        'no-case-declarations': 'error', // 不允许在switch的case中声明变量
        'no-else-return': 'error', // if中包含return语句，则无需else分支
        'no-empty-function': ['error', {
            allow: ['arrowFunctions']
        }], // 不允许空函数
        'no-eq-null': 'error', // 与null比较时必须使用===或!==
        'no-eval': 'error', // 不允许使用eval
        'no-extend-native': 'error', // 不允许对原生对象做扩展
        'no-extra-bind': 'error', // 禁止不必要的this绑定
        'no-floating-decimal': 'error', // 浮点数各部分必须书写完整
        'no-implicit-globals': 'error', // 不允许在顶级作用域声明变量或者函数
        'no-implied-eval': 'error', // 不允许类似eval()的用法
        //"no-invalid-this": "error", // 不允许在类或者与类相似对象的外部使用this关键字
        'no-labels': 'error', // 不允许label这种原始写法
        'no-lone-blocks': 'error', // 禁止不必要的代码块嵌套
        'no-loop-func': 'error', // 不允许循环中的函数修改外部变量
        'no-multi-spaces': 'error', // 不允许有多余空格
        'no-multi-str': 'error', // 禁止出现多行字符串
        'no-new': 'error', // 不允许出现new的结果无任何引用
        'no-new-func': 'error', // 不允许使用new Function()的方式构造一个函数
        'no-new-wrappers': 'error', // 不允许针对基础数据类型使用new构造
        'no-param-reassign': 'error', // 不允许对传入的函数参数做重新赋值操作
        'no-proto': 'error', // 不允许使用__proto__属性
        'no-return-assign': ['error', 'always'], // 不允许在return语句中进行赋值操作
        'no-script-url': 'error', // 不允许在url中包含js代码
        'no-self-compare': 'error', // 禁止自己和自己比较这种无意义的操作
        'no-sequences': 'error', // 禁止逗号操作符
        'no-throw-literal': 'error', // 不允许throw字面量
        'no-unmodified-loop-condition': 'error', // 不允许出现循环条件不变的情况
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true
        }], // 不允许出现无用的表达式
        'no-useless-call': 'error', // 不允许出现无意义的函数调用绑定
        'no-useless-concat': 'error', // 不允许出现多余的字符串拼接操作
        'no-useless-return': 'error', // 不允许出现无用的return语句
        'no-void': 'error', // 禁止使用void关键字
        'no-with': 'error', // 禁止使用with关键字
        'prefer-promise-reject-errors': 'error', // Promise对象优先reject一个Error对象而不是值
        radix: ['error', 'as-needed'], // 其他类型转为Number类型时，需要指定进制
        'vars-on-top': 'error', // 所有var变量声明应该位于作用域顶部
        'wrap-iife': 'error', // 立即执行函数需要被小括号包起来
        yoda: 'error', // 禁止yoda式的条件表达式写法
        'init-declarations': ['error', 'always'], // 变量在声明时必须初始化
        'no-undefined': 'error', // 不允许直接使用undefined
        'no-use-before-define': 'error', // 变量、函数、类在未定义之前不允许使用
        // 代码风格
        'indent-legacy': [
            'error',
            4,
            {
                SwitchCase: 1, // switch语句中case的缩进
            },
        ], // 缩进采用4个空格
        quotes: ['error', 'single'], //
        semi: ['error', 'always'],
        'array-bracket-newline': ['error', {
            multiline: true,
            minItems: 6
        }], // 数组括号摆放位置
        'array-bracket-spacing': ['error', 'never'], // 数组括号内部不包含空格
        'array-element-newline': ['error', {
            multiline: true,
            minItems: 6
        }], // 数组元素过多时换行
        'block-spacing': ['error', 'never'], // 花括号内部不包含空格
        'brace-style': 'error', // 花括号换行格式
        camelcase: [1], // 属性名都使用驼峰形式
        'comma-dangle': [1, 'never'], // 逗号不出现在最后一个元素的末尾
        'comma-spacing': ['error', {
            before: false,
            after: true
        }], // 逗号后留一个空格
        'comma-style': ['error', 'last'], // 逗号只出现在语句的末尾
        'computed-property-spacing': ['error', 'never'], // 计算属性名左右不需要空格
        'consistent-this': ['error', 'me'], // 当需要暂存this时，只能使用me这个变量
        'eol-last': ['error', 'always'], // 文件末尾必须留有一空行
        'func-call-spacing': ['error', 'never'], // 函数调用时函数名与括号间不允许有空格
        'func-names': ['error', 'as-needed'], // 根据需要决定函数是否具名
        'func-style': ['error', 'declaration', {
            allowArrowFunctions: true
        }], // 函数应当采用声明式，箭头函数除外
        'key-spacing': 'error', // 对象属性名冒号后应有一个空格
        'keyword-spacing': 'error', // 关键字前后都应留有一个空格
        'line-comment-position': 0, // 单行注释必须放在语句上方, 改成1, warning
        'lines-around-comment': 'error', // 块注释前必须留有一空行
        'max-depth': ['error', 4], // 代码块的最大嵌套深度为4
        'max-len': [1, 200], // 单行代码最大长度为120
        'max-nested-callbacks': ['error', 3], // 最大的回调嵌套深度为3
        'new-cap': 'error', // 所有以大写字母开头的函数都必须使用new来调用
        'new-parens': 'error', // 使用new调用构造函数，如果没有参数，则必须加上括号
        'no-array-constructor': 'error', // 不允许调用Array构造函数
        'no-bitwise': 'error', // 不允许使用位操作
        'no-continue': 'error', // 禁止continue语句
        'no-lonely-if': 'error', // 不允许else语句中只包含if语句
        'no-mixed-spaces-and-tabs': 'error', // 不允许在缩进时tab和space混用
        'no-multi-assign': 'error', // 不允许在一条语句中进行多次赋值操作
        'no-multiple-empty-lines': 'error', // 不允许出现连续的多个空行
        'no-negated-condition': 'error', // 不允许在拥有else分支的if语句中使用否定条件表达式
        'no-nested-ternary': 'error', // 不允许嵌套的三元表达式
        'no-new-object': 'error', // 不允许调用Object构造函数
        'no-tabs': 'error', // 禁止使用tab
        'no-trailing-spaces': 'error', // 行尾不允许出现空格
        'no-unneeded-ternary': 'error', // 禁止不必要的三元表达式
        'no-whitespace-before-property': 'error', // 属性名之前不允许出现空格
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true
                },
                ObjectPattern: 'never',
            },
        ], // 对象属性的换行规则
        // 'object-curly-spacing': 'error', // 对象括号内部不允许出现空格
        'operator-linebreak': ['error', 'before'], // 换行必须在操作符之前
        'padded-blocks': ['error', 'never'], // 代码块前后不允许出现空行
        'quote-props': ['error', 'as-needed'], // 属性名按照需要添加引号
        'semi-spacing': ['error', {
            before: false,
            after: false
        }], // 分号前后都不允许出现空格
        'semi-style': ['error', 'last'], // 分号的位置应在末尾
        'space-before-blocks': 'error', // 代码块花括号之前应有一个空格
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ], // 函数参数括号前是否留有空格
        'space-in-parens': ['error', 'never'], // 小括号内部不允许出现空格
        'space-infix-ops': 'error', // 运算符左右必须保留一个空格
        'space-unary-ops': 'error', // 单目运算符后的空格规则
        'spaced-comment': ['error', 'always'], // 注释开始前必须留有一个空格
        'switch-colon-spacing': 'error', // switch的case后需留有一个空格
        'multiline-comment-style': [0, 'starred-block'], // 多行注释风格, 暂时不强制
        // ES6
        'arrow-body-style': ['error', 'as-needed'], // 箭头函数体花括号规则
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数规则
        'arrow-spacing': 'error', // 箭头函数的箭头两侧需要各留一个空格
        'no-confusing-arrow': ['error', {
            allowParens: true
        }], // 杜绝让人费解的箭头函数使用
        'no-duplicate-imports': 'error', // 从同一个模块引入的对象应放在引入一条语句中
        'no-useless-computed-key': 'error', // 避免非必要的计算属性
        'no-useless-constructor': 'error', // 避免非必要的构造函数声明
        'no-useless-rename': 'error', // 避免非必要的重命名
        'no-var': 'error', // 必须使用let和const声明变量
        'object-shorthand': 'error', // 使用对象的简写形式
        'prefer-rest-params': 'error', // 剩余参数使用规则
        'rest-spread-spacing': ['error', 'never'], // 剩余参数的...后不允许空格
        'template-curly-spacing': 'error', // 模板字符串通配符内不允许出现空格
        'lines-between-class-members': ['error', 'always'], // 对象方法之间要用一个空行隔开

        // override推荐的配置
        'no-cond-assign': ['error', 'always'], // 条件语句中不允许有赋值操作
        'no-empty': ['error', {
            allowEmptyCatch: true
        }], // 允许空的catch语句
        'no-inner-declarations': ['error', 'both'], // 代码块中不允许定义函数和var变量

        // 建议采纳，warn级别
        'linebreak-style': ['warn', 'unix'], // 使用Unix系统换行符
        'no-extra-parens': [
            'warn',
            'all',
            {
                nestedBinaryExpressions: false, // 嵌套的二进制表达式
                enforceForArrowConditionals: false, // 箭头函数
            },
        ], // 表达式中不要添加多余的小括号
        // "no-magic-numbers": ["warn", {"ignoreArrayIndexes": true}], // 不允许出现魔法数字
        complexity: ['off', {
            max: 4
        }], // 圈复杂度应尽量小于等于2
        'default-case': 'warn', // switch语句需要default分支
        'no-implicit-coercion': 'warn', // 不建议使用简写形式的类型转换
        'no-warning-comments': 'warn', // 不要出现以TODO、FIXME等单词开头的注释
        'prefer-destructuring': [
            'warn',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: true,
                    object: true,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ], // 解构赋值的规则
        'prefer-arrow-callback': 'warn', // 优先使用箭头函数作为回调
        'prefer-const': 'warn', // 不会重新赋值的变量声明优先使用const
        'prefer-template': 'off', // 建议字符串拼接使用模板字符串

        // Vue规则配置
        'vue/no-parsing-error': 'error', // 检测template中的语法错误
        'vue/no-reserved-keys': 'error', // 属性名不允许使用保留字
        'vue/no-shared-component-data': 'error', // data属性必须为一个函数
        'vue/no-template-key': 'error', // 不允许在template标签的属性中出现key
        'vue/require-render-return': 'error', // render函数必须拥有一个返回值
        'vue/return-in-computed-property': 'error', // 每个computed属性都必须有一个返回值
        'vue/valid-template-root': 'off', // 检测template标签的使用是否正确
        'vue/valid-v-bind': 'error', // 检测v-bind指令的使用是否正确
        'vue/valid-v-if': 'error', // 检测v-if指令的使用是否正确
        'vue/valid-v-else-if': 'error', // 检测v-else-if指令的使用是否正确
        'vue/valid-v-else': 'error', // 检测v-else指令的使用是否正确
        'vue/valid-v-for': 'error', // 检测v-for指令的使用是否正确
        'vue/valid-v-html': 'error', // 检测v-html指令的使用是否正确
        'vue/valid-v-model': 'error', // 检测v-model指令的使用是否正确
        'vue/valid-v-on': 'error', // 检测v-on指令的使用是否正确
        'vue/valid-v-once': 'error', // 检测v-once指令的使用是否正确
        'vue/valid-v-show': 'error', // 检测v-show指令的使用是否正确
        'vue/no-confusing-v-for-v-if': 'error', // 避免令人疑惑的v-if和v-for指令使用
        'vue/no-duplicate-attributes': 'error', // 模板标签中不允许出现重复的属性名
        'vue/no-side-effects-in-computed-properties': 'error', // computed属性中不允许出现有副作用的操作
        'vue/no-textarea-mustache': 'error', // textarea应使用v-model来绑定多行内容
        'vue/order-in-components': 'warn', // 组件中各属性的声明顺序
        'vue/require-component-is': 'error', // 动态component组件必须包含is属性声明组件的类型
        'vue/require-default-prop': 'error', // required的属性必须设置默认值
        'vue/require-prop-types': 'error', // required的属性必须指定数据类型
        'vue/require-v-for-key': 'error', // v-for指令必须包含key属性
        'vue/this-in-template': 'error', // 模板中访问属性不允许使用this
        'vue/attribute-hyphenation': 'error', // 模板标签的属性名称采用hyphenated命名
        'vue/html-quotes': 'error', // 模板标签中的属性值采用双引号括起来
        'vue/html-self-closing': 'error', // 模板标签自闭合规则
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 4,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ], // 模板标签的排列规则
        'vue/mustache-interpolation-spacing': ['error', 'never'], // 模板中的文本占位符内部不允许有空格
        'vue/name-property-casing': ['error', 'kebab-case'], // 组件名称必须采用连接线命名规则
        'vue/no-multi-spaces': 'error', // 不允许出现多个空格
        'vue/v-bind-style': 'error', // 必须使用v-bind的简写形式
        'vue/v-on-style': 'error', // 必须使用v-on的简写形式
        'vue/no-dupe-keys': 'error', // 不允许出现重复的属性名称
    },
};