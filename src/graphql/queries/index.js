import gql from "graphql-tag";

export const listCountries = gql`
    query {
        listCountries {
            id
            name
            code
        }
    }
`;
