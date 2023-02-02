## TYPE ERROR - Typescript image import

> https://stackoverflow.com/questions/51100401/typescript-image-import

## TYPE ERROR - Type 'Dispatch<hook>' is not assignable to type '() => void'

> https://stackoverflow.com/questions/74061105/type-dispatchhook-is-not-assignable-to-type-void?rq=1

## TYPE ERROR - no index signature with a parameter of type 'string' was found on type ts7053

> https://bobbyhadz.com/blog/typescript-no-index-signature-with-parameter-of-type-string

```js
  const [isClicked, setIsClicked] = useState({
    milk: false,
    foam: false,
    whip: false,
  });

  const clickHandler = (value: string) => {
    setIsClicked((state) => {
      return { ...state, [value]: !state[value as keyof ClickedType] };
    });
  };
```

## TYPE ERROR - **useRef** for React Native TextInput

https://stackoverflow.com/questions/53390679/typescript-issues-when-creating-ref-for-react-native-textinput

```js
  const firstInput = React.createRef<TextInput>();
```

## TYPE ERROR - Type 'string | undefined' is not assignable to type 'string'.

> https://bobbyhadz.com/blog/typescript-type-undefined-is-not-assignable-to-type-string

Eswel doorh commentiig oruulj bolno. // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

## TYPE ERROR - Property does not exist on type '{}' in TypeScript [Error ts(2345)]

> https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type

1. Type guard method

ERROR --> const { bio, name, username }:User = originalUserInfo;

CORRECT --> const { bio, name, username } = originalUserInfo as User;

## TYPE ERROR - How to **setState** with an object in Typescript? [Error ts(2345)]

> https://stackoverflow.com/questions/71791207/how-to-setstate-with-an-object-in-typescript-error-ts2345

CORRECT --> setProfileInfo((prev) => ({ ...prev, bio, name, username } as User));
