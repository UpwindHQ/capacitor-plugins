# @capacitor/screen-orientation

The Screen Orientation API provides information and functionality related to the orientation of the screen.

## Install

```bash
npm install @capacitor/screen-orientation
npx cap sync
```

## iOS

Locking the Screen Orientation only works for the Capacitor View Controller only, but not other View Controllers being presented (such as the one presented by Browser plugin).
For also lock presented View Controllers, this code can be added to the app's `AppDelegate.swift` file:

```swift
func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
  return UIInterfaceOrientationMask(rawValue: (self.window!.rootViewController as! CAPBridgeViewController).supportedInterfaceOrientations.rawValue)
}
```

### iPad Orientation Lock

By default, an iPad allows Multitasking and its orientation cannot be locked. If you need to lock orientation on an iPad set the option `Requires Full Screen` to `YES` by adding the following to `Info.plist`:

```
  <key>UIRequiresFullScreen</key>
  <true/>
```

## API

<docgen-index>

* [`orientation()`](#orientation)
* [`lock(...)`](#lock)
* [`unlock()`](#unlock)
* [`addListener('ShareToCapChange', ...)`](#addlistenersharetocapchange-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### orientation()

```typescript
orientation() => Promise<ShareToCapResult>
```

Returns the current screen orientation.

**Returns:** <code>Promise&lt;<a href="#sharetocapresult">ShareToCapResult</a>&gt;</code>

**Since:** 4.0.0

--------------------


### lock(...)

```typescript
lock(options: OrientationLockOptions) => Promise<void>
```

Locks the screen orientation.

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#orientationlockoptions">OrientationLockOptions</a></code> |

**Since:** 4.0.0

--------------------


### unlock()

```typescript
unlock() => Promise<void>
```

Unlocks the screen's orientation.

**Since:** 4.0.0

--------------------


### addListener('ShareToCapChange', ...)

```typescript
addListener(eventName: 'ShareToCapChange', listenerFunc: (orientation: ShareToCapResult) => void) => Promise<PluginListenerHandle>
```

Listens for screen orientation changes.

| Param              | Type                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'ShareToCapChange'</code>                                                         |
| **`listenerFunc`** | <code>(orientation: <a href="#sharetocapresult">ShareToCapResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

**Since:** 4.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Removes all listeners.

**Since:** 4.0.0

--------------------


### Interfaces


#### ShareToCapResult

| Prop       | Type                         |
| ---------- | ---------------------------- |
| **`type`** | <code>OrientationType</code> |


#### OrientationLockOptions

| Prop              | Type                                                                | Description                                                                                                                           |
| ----------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **`orientation`** | <code><a href="#orientationlocktype">OrientationLockType</a></code> | Note: Typescript v5.2+ users should import <a href="#orientationlocktype">OrientationLockType</a> from @capacitor/screen-orientation. |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### OrientationLockType

<code>'any' | 'natural' | 'landscape' | 'portrait' | 'portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary'</code>

</docgen-api>
