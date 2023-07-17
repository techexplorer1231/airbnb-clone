##### To give a neutral background and opacity of 70%.

```jsx
<div className="bg-neutral-800/70">
```

##### Positioning the element absolutely to the top right corner of the parent element.

```jsx
<div className="absolute top-0 right-0">
```

##### To create an optional button - conditionally render the button.

    ```jsx
    {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
    ```

##### To modify a sibling element based on the state of the current element using peer class in tailwind.

```jsx
<div className="peer">
  <input
    type="text"
    className="peer-focus:text-neutral-900
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:translate-y-0
    peer-focus:scale-75
    peer-focus:-translate-y-4
    "
  />
</div>
```
