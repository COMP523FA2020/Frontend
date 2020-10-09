import { gql } from "@apollo/client"

export const GET_PREY_OF = gql`
    query($name:String!, $level:String, $metrics:String, $startYear: Int, $endYear: Int, $season: String, $region: String) {
            getPreyOf(predatorName: $name,
                      preyLevel: $level,
                      dietType: $metrics,
                      startYear: $startYear,
                      endYear: $endYear,
                      season: $season,
                      region: $region
                    ) {
                items
                taxon
                wt_or_vol
                occurence
                unspecified
        }
    }
`
export const GET_PREDATOR_OF = gql`
    query($name:String!, $level:String, $metrics:String, $startYear: String, $endYear: String, $season: String, $region: String) {
            getPredatorOf(preyName: $name,
                      predatorLevel: $level,
                      dietType: $metrics,
                      startYear: $startYear,
                      endYear: $endYear,
                      season: $season,
                      region: $region
                    ) {
                items
                taxon
                wt_or_vol
                occurence
                unspecified
        }
    }
`