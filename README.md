
# Silver Bullet plug for Mermaid diagrams
This plug adds basic [Mermaid](https://mermaid.js.org/) support to Silver Bullet.

**Note:** The Mermaid library itself is not bundled with this plug, it pulls the JavaScript from the JSDelivr CDN. This means _this plug will not work without an Internet connection_. The reason for this is primarily plug size (bundling the library would amount to 1.1MB). This way Mermaid is only loaded on pages with actual Mermaid diagrams rather than on every SB load.

## Installation
Run the {[Plugs: Add]} command and paste in: `github:silverbulletmd/silverbullet-mermaid/mermaid.plug.js`

That's all!

## Use

Put a mermaid block in your markdown:

    ```mermaid
    flowchart TD
        Start --> Stop
    ```

And move your cursor outside of the block to live preview it!

## Configuration 

You can use a `space-config` block to customize this plug. 


   ```space-config
   mermaid:
     version: "11.4.0"
     integrity: "SRI Hash"
   ```

