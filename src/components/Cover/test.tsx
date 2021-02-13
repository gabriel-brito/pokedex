import { renderWithTheme } from 'utils/tests/helper'

import Cover from '.'

describe('<Cover />', () => {
  it('should render the cover', () => {
    const { container } = renderWithTheme(<Cover />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #d31e25;
        border: 2px solid #000000;
        border-bottom: none;
        border-radius: 8px 8px 0 0;
        height: 165px;
        overflow: hidden;
        position: relative;
        width: 100%;
        z-index: 10;
      }

      .c1 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 100%;
        border: 5px solid #000000;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 130px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: -65px;
        position: absolute;
        top: -65px;
        width: 130px;
      }

      .c1::after {
        border-radius: 100%;
        border: 5px solid #000000;
        content: '';
        display: block;
        height: 50px;
        width: 50px;
      }

      .c2 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 100%;
        border: 5px solid #000000;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 130px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: -65px;
        position: absolute;
        top: -65px;
        width: 130px;
        left: auto;
        right: -65px;
      }

      .c2::after {
        border-radius: 100%;
        border: 5px solid #000000;
        content: '';
        display: block;
        height: 50px;
        width: 50px;
      }

      .c3 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #000000;
        border-radius: 100%;
        border: 2px solid #FFFFFF;
        bottom: -90px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 180px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        width: 180px;
        z-index: 20;
      }

      .c3::after {
        border-radius: 100%;
        background-color: #e0f5fe;
        content: '';
        cursor: pointer;
        display: block;
        height: 110px;
        width: 110px;
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        />
        <div
          class="c2"
        />
        <div
          class="c3"
        />
      </div>
    `)
  })
})
