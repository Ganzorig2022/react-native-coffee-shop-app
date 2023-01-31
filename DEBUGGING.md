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
