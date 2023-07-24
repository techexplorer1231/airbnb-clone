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

##### Passing props from Server to Client Components (Serialization)

Props passed from the Server to Client Components need to be serializable. This means that values such as functions, Dates, etc, cannot be passed directly to Client Components.

##### To create a new type/interface by omitting an existing type/interface and changing a few properties.

```jsx
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string,
  updatedAt: string,
  emailVerified: string | null,
};

interface NavbarProps {
  currentUser?: SafeUser | null;
}
```

##### Use of query-string to parse query params.

```jsx
const handleCategoryClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
```

##### Using a library 'world-countries' to display a list of countries in a dropdown.

```jsx
import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));
```

##### To dynamically load map without server side rendering.

```jsx
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});
```

##### To make sure Calendar is taking the full width of the parent element.

NOTE: 'important' property means that this style will override any other style that is applied to the element by default.

```css
.rdrMonth {
  width: 100% !important;
}

.rdrCalendarWrapper {
  width: 100% !important;
  font-size: 16px !important;
}
```
