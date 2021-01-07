# Create a sprite

## Prerequisites

Have an image with several animation frames (movement, attack, etc.).

## It is necessary to know

It is not mandatory to have a spritesheet as in the example below. You can create animations from any sprite sheet

## Spritesheet

Here is the spritesheet we will use:

![hero](/assets/chara.png)

1. Place the image in `src/client/characters/assets`
2. Then create the following file in `src/client/characters/hero.ts`

```ts
import { Spritesheet, Animation } from '@rpgjs/client'

const frameY = direction => {
    return {
        [Direction.Down]: 0,
        [Direction.Left]: 1,
        [Direction.Right]: 2, 
        [Direction.Up]: 3
    }[direction]
}

@Spritesheet({
    id: 'hero', // id (mandatory)
    image: require('./assets/chara.png'), // relative path of image
    framesWidth: 4, // number of frames of the image across the width
    framesHeight: 4, // number of frames of the image across the height
    width: 128, // width of image
    height: 192, // height of image
    textures: {
        [Animation.Stand]: {
            animations: direction => [{ time: 0, frameX: 1, frameY: frameY(direction) }]
        },
        [Animation.Walk]:  {
            animations: direction => [
                    [ 
                        { time: 0, frameX: 0, frameY: frameY(direction) },
                        { time: 10, frameX: 1, frameY: frameY(direction) },
                        { time: 20, frameX: 2, frameY: frameY(direction) }
                    ]
                ]
         }
    }
})
export class HeroCharacter {}
```

Follow the information in the comments

> It is important to put `require()` because Webpack will retrieve the images and put it in the `dist` folder. 

### Preset Spritesheet

It can take quite a long time to create the animations. Think about creating common functions. For example, if you take a spritesheet compatible with RPG Maker (as above). You can take a `RMSpritesheet` function

```ts
import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    id: 'hero',
    image: require('./assets/chara.png'),
    width: 128,
    height: 192,
    ...RMSpritesheet(4, 4, 0)
   
})
export class HeroCharacter {}
```

Parameters:
1. framesWidth
2. framesHeight
3. Frame for stand animation (1 by default)

- - -

[Character Credit Link](https://untamed.wild-refuge.net/rpgxp.php)