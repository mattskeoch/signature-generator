import Image from 'next/image'

import { useToast } from '../hooks/ui/use-toast'
import { ToastAction } from '../components/ui/toast'
import { Button } from '../components/Button'

import logoImage from '../images/logo.png'
import addressImage from '../images/address-icon-2x.webp'
import emailImage from '../images/email-icon-2x.webp'
import phoneImage from '../images/phone-icon-2x.webp'

export const Preview = ({ data }) => {
  const copyToClipboard = () => {
    const table = document.querySelector('table')
    console.log(table)
    const tableHtml = table.outerHTML
    const textField = document.createElement('textarea')
    textField.innerText = tableHtml
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  const selectSignature = () => {
    const source = document.querySelector('table')
    console.log(source)
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(source)
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    selection.removeAllRanges()
  }

  function selectText(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange()
      range.moveToElementText(document.getElementById(containerid))
      range.select()
    } else if (window.getSelection) {
      var range = document.createRange()
      range.selectNode(document.getElementById(containerid))
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
    }
  }

  const { toast } = useToast()

  return (
    <>
      <div className="shadow-teal-800/7 w-full max-w-5xl rounded-2xl bg-slate-50 p-5 shadow-lg">
        <div className="line shorter mb-5"></div>
        <div className="line long"></div>
        <div className="line short"></div>
        <div className="line long"></div>
        <div className="line short"></div>
        <div className="line short"></div>
        <div className="line short"></div>
        <div className="line long"></div>
        <div className="line short"></div>
        <div className="line short"></div>
        <div className="line long"></div>
        <div className="line long"></div>
        <div id="source" className="mt-8">
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{
              fontSize: 16 + 'px',
              fontFamily: 'Tahoma',
              verticalAlign: '-webkit-baseline-middle',
            }}
          >
            <tbody>
              <tr>
                <td>
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    style={{
                      fontSize: 16 + 'px',
                      fontFamily: 'Tahoma',
                      verticalAlign: '-webkit-baseline-middle',
                    }}
                  >
                    <tbody>
                      <tr>
                        <td width="150" style={{ verticalAlign: 'middle' }}>
                          <span
                            style={{ marginRight: 20 + 'px', display: 'block' }}
                          >
                            <Image
                              src={logoImage}
                              alt="Tribe Logo"
                              role="presentation"
                              width="130"
                              style={{ maxWidth: 130 + 'px' }}
                            />
                          </span>
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          <h3
                            color="#3e3e3e"
                            style={{
                              margin: 0 + 'px',
                              fontSize: 18 + 'px',
                              color: 'rgb(62, 62, 62)',
                            }}
                          >
                            <span>{data.name || 'Jane Doe'}</span>
                          </h3>
                          <p
                            color="#3e3e3e"
                            fontSize="medium"
                            style={{
                              margin: 0 + 'px',
                              fontWeight: 500,
                              color: 'rgb(62, 62, 62)',
                              fontSize: 14 + 'px',
                              lineHeight: 22 + 'px',
                            }}
                          >
                            <span>{data.title || 'Owner and Manager'}</span>
                          </p>
                        </td>
                        <td width="50">
                          <div style={{ width: 50 + 'px' }}></div>
                        </td>
                        <td
                          color="#48B57B"
                          direction="vertical"
                          width="1"
                          style={{
                            width: 10 + 'px',
                            borderBottom: 'none',
                            borderLeft:
                              1 + 'px ' + 'solid ' + 'rgb(72, 181, 123)',
                          }}
                        ></td>
                        <td width="50">
                          <div style={{ width: 50 + 'px' }}></div>
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              verticalAlign: '-webkit-baseline-middle',
                              fontSize: 'medium',
                              fontFamily: 'Tahoma',
                            }}
                          >
                            <tbody>
                              <tr
                                height="25"
                                style={{ verticalAlign: 'middle' }}
                              >
                                <td
                                  width="30"
                                  style={{ verticalAlign: 'middle' }}
                                >
                                  <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      verticalAlign: '-webkit-baseline-middle',
                                      fontSize: 'medium',
                                      fontFamily: 'Tahoma',
                                    }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td style={{ verticalAlign: 'bottom' }}>
                                          <span
                                            color="#48B57B"
                                            width="11"
                                            style={{
                                              display: 'block',
                                              backgroundColor:
                                                'rgb(72,181, 123)',
                                            }}
                                          >
                                            <Image
                                              src={addressImage}
                                              alt="address icon"
                                              color="#48B57B"
                                              width="13"
                                              height="14"
                                              style={{
                                                display: 'block',
                                                backgroundColor:
                                                  'rgb(72,181,123)',
                                              }}
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>

                                <td style={{ padding: 0 + 'px' }}>
                                  <span
                                    color="#3e3e3e"
                                    style={{
                                      fontSize: 12 + 'px',
                                      color: 'rgb(62, 62, 62)',
                                    }}
                                  >
                                    <a
                                      href="/"
                                      style={{ color: 'rgb(62, 62, 62)' }}
                                    >
                                      <span>
                                        {data.address ||
                                          '21 Tohma Pass, Sydney, 2000'}
                                      </span>
                                    </a>
                                  </span>
                                </td>
                              </tr>
                              <tr
                                height="25"
                                style={{ verticalAlign: 'middle' }}
                              >
                                <td
                                  width="30"
                                  style={{ verticalAlign: 'middle' }}
                                >
                                  <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      verticalAlign: '-webkit-baseline-middle',
                                      fontSize: 'medium',
                                      fontFamily: 'Tahoma',
                                    }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td style={{ verticalAlign: 'bottom' }}>
                                          <span
                                            color="#48B57B"
                                            width="11"
                                            style={{
                                              display: 'block',
                                              backgroundColor:
                                                'rgb(72,181, 123)',
                                            }}
                                          >
                                            <Image
                                              src={emailImage}
                                              alt="email icon"
                                              color="#48B57B"
                                              width="13"
                                              height="14"
                                              style={{
                                                display: 'block',
                                                backgroundColor:
                                                  'rgb(72,181, 123)',
                                              }}
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td style={{ padding: 0 + 'px' }}>
                                  <a
                                    href="'mailto:' + email"
                                    color="#3e3e3e"
                                    style={{
                                      textDecoration: 'none',
                                      color: 'rgb(62, 62, 62)',
                                      fontSize: 12 + 'px',
                                    }}
                                  >
                                    <span>
                                      {data.email || 'email@tribe41.com.au'}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr
                                height="25"
                                style={{ verticalAlign: 'middle' }}
                              >
                                <td
                                  width="30"
                                  style={{ verticalAlign: 'middle' }}
                                >
                                  <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      verticalAlign: '-webkit-baseline-middle',
                                      fontSize: 'medium',
                                      fontFamily: 'Tahoma',
                                    }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td style={{ verticalAlign: 'bottom' }}>
                                          <span
                                            color="#48B57B"
                                            width="11"
                                            style={{
                                              display: 'block',
                                              backgroundColor:
                                                'rgb(72,181, 123)',
                                              padding: 0 + 'px',
                                            }}
                                          >
                                            <Image
                                              src={phoneImage}
                                              alt="phone icon"
                                              color="#48B57B"
                                              width="13"
                                              height="14"
                                              style={{
                                                display: 'block',
                                                backgroundColor:
                                                  'rgb(72,181, 123)',
                                              }}
                                            />
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>

                                <td
                                  style={{
                                    padding: 0 + 'px',
                                    color: 'rgb(62, 62, 62)',
                                  }}
                                >
                                  <a
                                    href="'tel:' + telephone"
                                    color="#3e3e3e"
                                    style={{
                                      textDecoration: 'none',
                                      color: 'rgb(62, 62, 62)',
                                      fontSize: 12 + 'px',
                                    }}
                                  >
                                    <span>{data.phone || '1300 444 888'}</span>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid max-w-sm grid-cols-2 gap-3">
        <Button
          href=""
          variant="solid"
          color="green"
          onClick={() => {
            selectSignature(),
              toast({
                title: 'Signature copied!',
                description: (
                  <a href="/">You can now add your signature to Outlook</a>
                ),
              })
          }}
        >
          Copy Signature
        </Button>
        <Button
          href=""
          variant="outline"
          color="green"
          onClick={() => {
            copyToClipboard(),
              toast({
                title: 'Signature HTML code copied!',
                description: (
                  <a href="/">You can now add your signature to Outlook</a>
                ),
              })
          }}
        >
          Copy Signature HTML
        </Button>
      </div>
    </>
  )
}
