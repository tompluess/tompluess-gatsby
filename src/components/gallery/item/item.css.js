import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
`;

export const Copy = styled.p`

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
