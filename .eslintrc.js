module.exports = { 
    root: true, 
    env: { node: true }, 
    globals: { 
        defineProps: "readonly", 
        defineEmits: "readonly" 
    }, 
    'extends': ['plugin:vue/base', 'plugin:vue/vue3-essential', 'eslint:recommended'], 
    rules: { 
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', 
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', 
        'vue/script-setup-uses-vars': 'error'
    } 
}
 /* eslint-disable */
 // eslint-disable-next-line