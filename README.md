# MSB Offline Application Template for MSB Offline API V2

This package is a template which you can use to create MSB Offline Applications based on MSB Offline API V2.

Please reach out to us if you need assistance on how to use this package: https://mobisys.com/contact

## How to use this template
1. clone this repository

```bash
git clone https://github.com/MobisysGmbH/msb-offline-v2-template.git
```

2. update application name in `tsconfig.json`


```json
{
  "include": [
    "./src/**/*"
  ],
  "compilerOptions": {
    "outFile": "dist/TMPLTX0000.js", // <-- update this line
    "lib": [
      "es2017"
    ],
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "removeComments": true,
    "target": "es5",
    "experimentalDecorators": true
  }
}
```

3. install dependencies

```bash
npm install
```

4. implement your business logic in `src/OfflineScript.ts`

5. build your offline application
```bash
npm run build
```

6. the build artifact will be in `dist` folder