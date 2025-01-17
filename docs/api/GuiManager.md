::: tip Summary
- [Show Text ](#show-text)
- [Show Choices ](#show-choices)
- [Displays a notification](#displays-a-notification)
- [Call Main Menu](#call-main-menu)
- [Call Shop Menu](#call-shop-menu)
- [Call custom GUI](#call-custom-gui)
- [Close custom GUI](#close-custom-gui)
- [View to GUI attached](#view-to-gui-attached)
- [Hide to GUI attached](#hide-to-gui-attached)
:::
---
### Show Text 
- **Method**: `player.showText(text,options)`
- **Arguments**:
    - {<Type type='string' />} `text`.  (Optional: `false`)
    - {<Type type='object' />} `options`. the different options, see usage below (Optional: `true`)
- **Return**: <Type type='Promise' />   
- **Usage**:


Show a text. This is a graphical interface already built. Opens the GUI named `rpg-dialog`

```ts
player.showText('Hello World')
```

The method returns a promise. It is resolved when the dialog box is closed.

```ts
await player.showText('Hello World')
// dialog box is closed, then ...
```

**Option: position**

You can define how the dialog box is displayed:
- top
- middle
- bottom

(bottom by default)

```ts
player.showText('Hello World', {
     position: 'top'
})
```

**Option: fullWidth**

`boolean` (true by default)

Indicate that the dialog box will take the full width of the screen.

```ts
player.showText('Hello World', {
     fullWidth: true
})
```

**Option: autoClose**

`boolean` (false by default)

If false, the user will have to press Enter to close the dialog box.

 ```ts
player.showText('Hello World', {
     autoClose: true
})
```

**Option: typewriterEffect**

`boolean` (true by default)

Performs a typewriter effect

 ```ts
player.showText('Hello World', {
     typewriterEffect: false
})
```

**Option: talkWith**

`RpgPlayer` (nothing by default)

If you specify the event or another player, the other player will stop his or her movement and look in the player's direction.

 ```ts
// Code in an event
player.showText('Hello World', {
     talkWith: this
})
```


---
### Show Choices 
- **Method**: `player.showChoices(text,choices)`
- **Arguments**:
    - {<Type type='string' />} `text`.  (Optional: `false`)
    - {<Type type='Array&lt;{ text: string, value: any }&gt;' />} `choices`.  (Optional: `false`)
    - {<Type type='object' />} `options`. Same options as the openDialog method (Optional: `true`)
- **Return**: <Type type='Promise&lt;Choice | null&gt;' />   
- **Usage**:


Shows a dialog box with a choice. Opens the GUI named `rpg-dialog`

```ts
const choice = await player.showChoices('What color do you prefer?', [
     { text: 'Black', value: 'black' },
     { text: 'Rather the blue', value: 'blue' },
     { text: 'I don\'t have a preference!', value: 'none' }
])

// If the player selects the first
console.log(choice) // { text: 'Black', value: 'black' }
```


---
### Displays a notification
- **Method**: `player.showNotification()`
- **Arguments**:
    - {<Type type='string' />} `message`. - The message to display in the notification (Optional: `false`)
    - {<Type type='object' />} `options`. - An object containing options for the notification (Optional: `false`)
    - {<Type type='number' />} `options.time`. - The time to display the notification for (in ms). Default: 2000ms (Optional: `false`)
    - {<Type type='string' />} `options.icon`. - The icon to display in the notification. Put the identifier of the spritesheet (defined on the client side) (Optional: `false`)
    - {<Type type='string' />} `options.sound`. - The sound to play when the notification is shown. Set the sound ID (defined on the client side) (Optional: `false`)
- **Return**: <Type type='void' />   
- **Usage**:


Displays a notification . Opens the GUI named `rpg-notification`


---
### Call Main Menu
- **Method**: `player.callMainMenu()`
- **Return**: <Type type='void' />   
- **Usage**:


Calls main menu. Opens the GUI named `rpg-main-menu`


---
### Call Shop Menu
- **Method**: `player.callShop()`
- **Return**: <Type type='void' />   
- **Usage**:


Calls shop menu. Opens the GUI named `rpg-shop`


---
### Call custom GUI
- **Method**: `player.gui(guiId)`
- **Arguments**:
    - {<Type type='string' />} `guiId`.  (Optional: `false`)
- **Return**: <Type type='Gui' />   
- **Usage**:


Call a custom Gui

```ts
// Calls a client-side component, created with VueJS, named "inn".
const gui = player.gui('inn')

 // You can wait for actions on the menu. It only works if the menu is open.
gui.on('accept', () => {
     player.allRecovery()
})

// The GUI is opened by passing recoverable data on the client side.
gui.open({ hello: 'world' })
```

When opening the GUI, one can give options

```ts
await gui.open({ hello: 'world' }, {
     waitingAction: true,
     blockPlayerInput: true
})
// After the GUI is closed
```

- `blockPlayerInput`: while the GUI is open, the player can not move on the map
- `waitingAction`: We explicitly wait until the GUI is closed for the promise to be resolved.


---
### Close custom GUI
- **Method**: `player.removeGui(guiId,data)`
- **Arguments**:
    - {<Type type='string' />} `guiId`.  (Optional: `false`)
    - {<Type type='object' />} `data`. Passing data if you close the GUI  (Optional: `true`)
- **Return**: <Type type='Gui' />   
- **Usage**:


Closes the GUI and removes it from memory


---
### View to GUI attached
- **Since**: 3.0.0-beta.5
- **Method**: `player.showAttachedGui(players?)`
- **Arguments**:
    - {<Type type=' <a href="/commands/common.html">RpgPlayer</a>[] | <a href="/commands/common.html">RpgPlayer</a>' />} `players`. The GUIs attached to the players to display (Optional: `true`)
- **Example**: 
```ts
player.showAttachedGui()
```
```ts
player.showAttachedGui(aPlayer)
```
```ts
player.showAttachedGui([player1, player2])
``` 
- **Usage**:

 
Display the GUI attached to the players

If you don't specify the players as parameters, it will display the GUI of the instance 
But you can specify which GUIs to display by specifying the players as the first parameter


---
### Hide to GUI attached
- **Since**: 3.0.0-beta.5
- **Method**: `player.hideAttachedGui(players?)`
- **Arguments**:
    - {<Type type=' <a href="/commands/common.html">RpgPlayer</a>[] | <a href="/commands/common.html">RpgPlayer</a>' />} `players`. The GUIs attached to the players to hide (Optional: `true`)
- **Example**: 
```ts
player.hideAttachedGui()
```
```ts
player.hideAttachedGui(aPlayer)
```
```ts
player.hideAttachedGui([player1, player2])
``` 
- **Usage**:

 
Hide the GUI attached to the players

