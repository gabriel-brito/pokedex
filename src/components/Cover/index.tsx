import * as S from './styles'

export type CoverTypes = {
  upside?: boolean
}

const Cover = ({ upside = false }: CoverTypes) => (
  <S.Wrapper upside={upside}>
    <S.TopDetail />
    <S.TopDetail right />
    <S.MiddleDetail />
  </S.Wrapper>
)

export default Cover
