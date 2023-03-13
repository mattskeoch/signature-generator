import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog'

export const HelpLinks = () => {
  return (
    <>
      <ul className="mt-12 flex gap-4">
        <li>
          <AlertDialog>
            <AlertDialogTrigger className="text-sm underline">
              Learn how to add to Outlook
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <p className="font-bold">
                    You can set up a signature in the Outlook desktop
                    application by copying and pasting your signature text into
                    the Signature section under the Mail tab in Outlook&apos;s
                    Settings.
                  </p>
                  <ol className="mt-5 ml-8 list-decimal space-y-4">
                    <li>
                      <p>First click the Copy Signature HTML button</p>
                    </li>

                    <li>
                      <p>
                        Inside the Out look app click on the File option in the
                        top left corner
                      </p>
                    </li>
                    <li>
                      <p>Select Options and then Mail.</p>
                    </li>
                    <li>
                      <p>
                        Click on signatures in the Composers section of the
                        resulting menu.
                      </p>
                    </li>
                    <li>
                      <p>
                        Paste your signature text into the box labeled Edit
                        signature.
                      </p>
                    </li>
                  </ol>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
        <li>
          <AlertDialog>
            <AlertDialogTrigger className="text-sm underline">
              Learn how to add to Outlook.com
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <p className="font-bold">
                    You can set up a signature in the Outlook.com application by
                    copying and pasting your signature into the Email Signature
                    section Outlook.com&apos;s settings.
                  </p>
                  <ol className="mt-5 ml-8 list-decimal space-y-4">
                    <li>
                      <p>First click the Copy Signature HTML button</p>
                    </li>

                    <li>
                      <p>
                        Head to Outlook.com and click on the gear icon in the
                        top right-hand corner and select &apos;View all Outlook
                        settings&apos;.
                      </p>
                      <li>
                        <p>
                          Scroll down to the &apos;Email signature&apos;
                          section.
                        </p>
                      </li>
                    </li>
                    <li>
                      <p>Then, go to &apos;Compose and reply&apos;.</p>
                    </li>
                    <li>
                      <p>Here, you can Paste in the signature you created.</p>
                    </li>
                  </ol>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
        <li>
          <AlertDialog>
            <AlertDialogTrigger className="text-sm underline">
              Get in touch for more help
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Need help with your email signature?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  You can email
                  <a href="mailto:matt@tribe41.com.au">
                    {' '}
                    matt@tribe41.com.au
                  </a>{' '}
                  for further assistance.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
      </ul>
    </>
  )
}
