---
title: $setRoleColor
description: $setRoleColor will set a roles' color.
id: setRoleColor
---

`$setRoleColor` will set a roles' color.

## Usage

```php
$setRoleColor[roleID;color]
```

## Parameters

| Field  | Type    | Description                               | Required |
| ------ | ------- | ----------------------------------------- | :------: |
| roleID | integer | The ID of the role that will be modified. |   true   |
| color  | string  | The new (hex) color.                      |   true   |

## Example(s)

This will change a random role's color to red:

```javascript
client.command({
  name: "setRoleColor",
  code: `
   $setRoleColor[$randomRoleID;Red]`,
});
```

```javascript
client.command({
  name: "setRoleColor",
  code: `
   $setRoleColor[$randomRoleID;ED4245]`,
});
```
