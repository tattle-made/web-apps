import Link from "gatsby-link";
import styled from "styled-components";

const ThemedLink = styled(Link)`
  color: inherit;
  :visited {
    color: inherit;
  }
`;

const ThemedPlainLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`;

const ThemedExternalLink = styled.a`
  :visited {
    color: inherit;
  }
`;

const ThemedPlainExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`;

export {
  ThemedLink as Link,
  ThemedPlainLink as PlainLink,
  ThemedExternalLink as ExternalLink,
  ThemedPlainExternalLink as PlainExternalLink,
};
