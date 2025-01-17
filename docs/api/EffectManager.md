::: tip Summary
- [Has Effect](#has-effect)
- [Get Effects](#get-effects)
- [Set Effects](#set-effects)
:::
---
### Has Effect
- **Method**: `player.hasEffect(effect)`
- **Arguments**:
    - {<Type type=' <a href="/database/effect.html">Effect</a>' />} `effect`.  (Optional: `false`)
- **Return**: <Type type='boolean' />   
- **Usage**:

 
```ts
import { Effect } from '@rpgjs/server'

const bool = player.hasEffect(Effect.CAN_NOT_SKILL)
```


---
### Get Effects
- **Property**: `player.effects`
- **Type**: <Type type='Array&lt <a href="/database/effect.html">Effect</a>&gt;' />
- **Optional**: `false` 
- **Usage**:

 
Retrieves a array of effects assigned to the player, state effects and effects of weapons and armors equipped with the player's own weapons.

```ts
console.log(player.effects)
``` 

---
### Set Effects
- **Property**: `player.effects`
- **Type**: <Type type='Array&lt <a href="/database/effect.html">Effect</a>&gt;' />
- **Optional**: `false` 
- **Usage**:

 
Assigns effects to the player. If you give a array, it does not change the effects of the player's states and armor/weapons equipped.

```ts
import { Effect } from '@rpgjs/server'

player.effects = [Effect.CAN_NOT_SKILL]
``` 
