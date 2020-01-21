import typescript from 'rollup-plugin-typescript2';

export default [
 {
    input: 'MyClass.ts',
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true
      })
    ],
    output: [
      {
        file: 'dist/p1-esm.js',
        format: 'es',
      }
    ]
  }
];
