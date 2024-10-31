"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
    const [initialized, setInitialized] = React.useState(false);

    React.useEffect(() => {
        setInitialized(true);
    }, [])

    if (initialized)
        return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
