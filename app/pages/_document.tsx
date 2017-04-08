import Document, {
  DocumentProps,
  Head,
  InitialProps,
  Main,
  NextScript,
} from 'next/document'
import * as React from 'react'
import Container from '../../common/components/container'
const styled = require('styled-components')

export default class MyDocument extends Document<{}> {
  public static getInitialProps(props: InitialProps): DocumentProps<{}> {
    const page = props.renderPage()
    const sheet = styled
      .rules()
      .map(({cssText}: {cssText: string}) => cssText)
      .join('\n')
    const styles = <style dangerouslySetInnerHTML={{__html: sheet}} />
    return {...page, styles}
  }

  // tslint:disable-next-line:prefer-function-over-method
  public render() {
    return (
      <html>
        <Head />
        <body>
          <Container component={Main} />
          <NextScript />
        </body>
      </html>
    )
  }
}
