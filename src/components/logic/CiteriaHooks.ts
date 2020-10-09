import { useReducer } from "react"
export interface CriteriaState {
    type: string, value: string
}
export function useStartYear(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = [
        "1900",
        "1910",
        "1920",
        "1930",
        "1940",
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
    ]
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return { type: action, value: action }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "1900", value: "1900" });
    return [state, dispatch, options]
}
export function useEndYear(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = [
        "1910",
        "1920",
        "1930",
        "1940",
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
        "2020"
    ]
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return { type: action, value: action }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "2020", value: "2020" });
    return [state, dispatch, options]
}

export function useSeasons(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = [
        "Spring",
        "Summer",
        "Fall",
        "Winter",
        "Unspecified"
    ]
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return {
                type: action, value: action.toLowerCase()
            }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "Unspecified", value: "unspecified" });
    return [state, dispatch, options]
}

export function useRegion(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = [
        "Florida",
        "Colorado",
        "Arizona",
    ]
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return {
                type: action, value: action
            }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "Florida", value: "Florida" });
    return [state, dispatch, options]
}

export function useMetrics(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = ["% By Occurrence", "% By Items", "% By Weight/Volume", "Unspecified"];
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            switch (action) {
                case "% By Occurrence":
                    return { type: action, value: "occurrence" }
                case "% By Items":
                    return { type: action, value: "items" }
                case "% By Weight/Volume":
                    return { type: action, value: "wt_or_vol" }
                default:
                    return { type: "Unspecified", value: "unspecified" }
            }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "Unspecified", value: "unspecified" });
    return [state, dispatch, options]
}

export function useLevel(): [CriteriaState, React.Dispatch<string>, string[]] {
    const options = ["Suborder", "Scientific_Name", "Order", "Kingdom", "Phylum", "Class", "Family", "Genus", "Species"];
    function reducer(state: CriteriaState, action: string) {
        if (options.includes(action)) {
            return { type: action, value: action.toLowerCase() }
        } else {
            return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { type: "Scientific_Name", value: "scientific_name" });
    return [state, dispatch, options]
}