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
    const source = document.querySelector('tbody')
    console.log(source)
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(source)
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    selection.removeAllRanges()
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
              border: 'none' + ' !important',
            }}
          >
            <tbody style={{ border: 'none' + ' !important' }}>
              <tr style={{ border: 'none' + ' !important' }}>
                <td style={{ border: 'none' + ' !important' }}>
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    style={{
                      fontSize: 16 + 'px',
                      fontFamily: 'Tahoma',
                      verticalAlign: '-webkit-baseline-middle',
                      border: 'none' + ' !important',
                    }}
                  >
                    <tbody style={{ border: 'none' + ' !important' }}>
                      <tr style={{ border: 'none' + ' !important' }}>
                        <td
                          width="150"
                          style={{
                            verticalAlign: 'middle',
                            border: 'none' + ' !important',
                          }}
                        >
                          <span
                            style={{
                              marginRight: 20 + 'px',
                              display: 'block',
                              border: 'none',
                            }}
                          >
                            <Image
                              src={logoImage}
                              alt="Tribe Logo"
                              role="presentation"
                              width="130"
                              style={{
                                maxWidth: 130 + 'px',
                                border: 'none' + ' !important',
                              }}
                            />
                          </span>
                        </td>
                        <td
                          style={{
                            verticalAlign: 'middle',
                            border: 'none',
                          }}
                        >
                          <h3
                            style={{
                              margin: 0 + 'px',
                              border: 'none',
                              fontWeight: 500,
                            }}
                          >
                            <span
                              style={{
                                border: 'none',
                                fontSize: 18 + 'px',
                                color: '#3e3e3e',
                              }}
                            >
                              {data.name || 'Jane Doe'}
                            </span>
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
                              border: 'none' + ' !important',
                            }}
                          >
                            <span style={{ border: 'none' }}>
                              {data.title || 'Owner and Manager'}
                            </span>
                          </p>
                        </td>
                        <td
                          width="50"
                          style={{ border: 'none' + ' !important' }}
                        >
                          <div style={{ width: 50 + 'px' }}></div>
                        </td>
                        <td
                          color="#48B57B"
                          direction="vertical"
                          width="1"
                          style={{
                            width: 10 + 'px',
                            borderTop: 'none',
                            borderRight: 'none',
                            borderBottom: 'none',
                            borderLeft:
                              1 + 'px ' + 'solid ' + 'rgb(72, 181, 123)',
                          }}
                        ></td>
                        <td
                          width="50"
                          style={{ border: 'none' + ' !important' }}
                        >
                          <div style={{ width: 50 + 'px' }}></div>
                        </td>
                        <td
                          style={{
                            verticalAlign: 'middle',
                            border: 'none' + ' !important',
                          }}
                        >
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              verticalAlign: '-webkit-baseline-middle',
                              fontSize: 'medium',
                              fontFamily: 'Tahoma',
                              border: 'none' + ' !important',
                            }}
                          >
                            <tbody style={{ border: 'none' + ' !important' }}>
                              <tr
                                height="25"
                                style={{
                                  verticalAlign: 'middle',
                                  border: 'none' + ' !important',
                                }}
                              >
                                <td
                                  width="30"
                                  style={{
                                    verticalAlign: 'middle',
                                    border: 'none' + ' !important',
                                  }}
                                >
                                  <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      verticalAlign: '-webkit-baseline-middle',
                                      fontSize: 'medium',
                                      fontFamily: 'Tahoma',
                                      border: 'none' + ' !important',
                                    }}
                                  >
                                    <tbody
                                      style={{
                                        border: 'none' + ' !important',
                                      }}
                                    >
                                      <tr
                                        style={{
                                          border: 'none' + ' !important',
                                        }}
                                      >
                                        <td
                                          style={{
                                            verticalAlign: 'bottom',
                                            border: 'none' + ' !important',
                                          }}
                                        >
                                          <span
                                            color="#48B57B"
                                            width="11"
                                            style={{
                                              display: 'block',
                                              border: 'none',
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
                                                backgroundColor: '#48b57b',
                                                border: 'none' + ' !important',
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
                                    border: 'none' + ' !important',
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: 12 + 'px',
                                      color: 'rgb(62, 62, 62)',
                                    }}
                                  >
                                    <a
                                      href="/"
                                      style={{ color: 'rgb(62, 62, 62)' }}
                                    >
                                      <span
                                        style={{
                                          border: 'none',
                                          color: '#3e3e3e',
                                        }}
                                      >
                                        {data.phone || '1300 444 888'}
                                      </span>
                                    </a>
                                  </span>
                                </td>
                              </tr>
                              <tr
                                height="25"
                                style={{
                                  verticalAlign: 'middle',
                                  border: 'none' + ' !important',
                                }}
                              >
                                <td
                                  width="30"
                                  style={{
                                    verticalAlign: 'middle',
                                    border: 'none' + ' !important',
                                  }}
                                >
                                  <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      verticalAlign: '-webkit-baseline-middle',
                                      fontSize: 'medium',
                                      fontFamily: 'Tahoma',
                                      border: 'none' + ' !important',
                                    }}
                                  >
                                    <tbody
                                      style={{
                                        border: 'none' + ' !important',
                                      }}
                                    >
                                      <tr
                                        style={{
                                          border: 'none' + ' !important',
                                        }}
                                      >
                                        <td
                                          style={{
                                            verticalAlign: 'bottom',
                                            border: 'none',
                                          }}
                                        >
                                          <span
                                            color="#48B57B"
                                            width="11"
                                            style={{
                                              display: 'block',
                                              border: 'none',
                                            }}
                                          >
                                            <Image
                                              src={emailImage}
                                              alt="email icon"
                                              width="13"
                                              height="14"
                                              style={{
                                                display: 'block',
                                                backgroundColor: '#48b57b',
                                                border: 'none' + ' !important',
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
                                    border: 'none' + ' !important',
                                  }}
                                >
                                  <a
                                    href="'mailto:' + email"
                                    style={{
                                      textDecoration: 'none' + ' !important',
                                      fontSize: 12 + 'px',
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: '#3e3e3e',
                                        border: 'none',
                                        textDecoration: 'none' + ' !important',
                                      }}
                                    >
                                      {data.email || 'email@tribe41.com.au'}
                                    </span>
                                  </a>
                                </td>
                              </tr>
                              <tr
                                height="25"
                                style={{
                                  verticalAlign: 'middle',
                                  border: 'none' + ' !important',
                                }}
                              >
                                <td
                                  width="30"
                                  style={{
                                    verticalAlign: 'middle',
                                    border: 'none' + ' !important',
                                  }}
                                >
                                  <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      verticalAlign: '-webkit-baseline-middle',
                                      fontSize: 'medium',
                                      fontFamily: 'Tahoma',
                                      border: 'none' + ' !important',
                                    }}
                                  >
                                    <tbody
                                      style={{
                                        border: 'none' + ' !important',
                                      }}
                                    >
                                      <tr
                                        style={{
                                          border: 'none' + ' !important',
                                        }}
                                      >
                                        <td
                                          style={{
                                            verticalAlign: 'bottom',
                                            border: 'none' + ' !important',
                                          }}
                                        >
                                          <span
                                            color="#48B57B"
                                            width="11"
                                            style={{
                                              display: 'block',

                                              padding: 0 + 'px',
                                              border: 'none' + ' !important',
                                            }}
                                          >
                                            <Image
                                              src={addressImage}
                                              alt="address icon"
                                              color="#48B57B"
                                              width="13"
                                              height="14"
                                              style={{
                                                color: '#48B57B',

                                                backgroundColor: '#48B57B',
                                                border: 'none' + ' !important',
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
                                    border: 'none' + ' !important',
                                  }}
                                >
                                  <a
                                    href="'tel:' + telephone"
                                    color="#3e3e3e"
                                    style={{
                                      textDecoration: 0 + 'px',
                                      color: 'rgb(62, 62, 62)',
                                      fontSize: 12 + 'px',
                                      border: 'none' + ' !important',
                                    }}
                                  >
                                    <span
                                      style={{
                                        border: 'none',
                                        color: '#3e3e3e',
                                      }}
                                    >
                                      {data.address ||
                                        '21 Tohma Pass, Sydney, 2000'}
                                    </span>
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
