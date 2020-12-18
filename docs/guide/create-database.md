# Create Database

## Prerequisites

Nothing

## It is necessary to know

1. We don't talk about databases you know (SQL or No-SQL) :D
2. Here is the creation of items, skills, classes, weapons, etc...

## Creating an item

```ts
import { Item } from '@rpgjs/database'

@Item({  
    name: 'Potion',
    description: 'Gives 100 HP',
    price: 200,
    hpValue: 100
})
export class Potion { }
```

## Add the item to your game

Add the `src/server/database/items/potion.ts` file

```ts
import { RpgServer, RpgServerEngine } from '@rpgjs/server'
import { Potion } from './database/items/potion.ts'

@RpgServer({
    database: {
        Potion
    }
})
export default class RPG extends RpgServerEngine { }
```

## Using the item in an event

Add the `src/server/events/chara.ts` file

```ts
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import { Potion } from '../database/items/potion.ts'

@EventData({
    name: 'EV-1'
})
export class CharaEvent extends RpgEvent {
    async onAction(player: RpgPlayer) {
       await player.showText('I give you a potion')
       player.addItem(Potion)
    }
}
```