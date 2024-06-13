import {
  Body,
  Container,
  Head,
  Html,
  Text,
  Tailwind,
  Button,
  Font,
  Section,
  Img,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

export default function ResetPassword() {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Font
            fontFamily="PP Neue Montreal"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: 'https://joinvalley-zeta.vercel.app/fonts/PPNeueMontreal-Variable.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="font-sans">
          <Container className="bg-[#FCFCFC] dark:bg-[#1F1F1F] w-full h-full max-w-[52.3125rem] max-h-[62.9375rem] rounded-md px-3">
            <Container className="mx-auto flex bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1714497117/workspace_invite_assests/Valley_-_Primary_Logo_-_SVG_-_White_1_dbamig.png)] dark:bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1714497120/workspace_invite_assests/Valley_-_Primary_Logo_-_SVG_-_Black_1_dxokfd.png)] bg-no-repeat bg-contain bg-center w-[108px] h-[25px] mt-[56px]" />
            <Container className="mx-auto w-full">

              <Container className="mx-auto w-full bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1714508159/workspace_invite_assests/Frame_36_White_dyo41g.png)] dark:bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1714509161/workspace_invite_assests/Frame_36_Black_l2fos1.png)] bg-no-repeat bg-contain bg-center max-w-[412px] h-[242px]">
                <Section>
                  <Row>
                    <Column align="center">
                      <Container className="rounded-full w-[60px] h-[60px] bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1717158629/email_assets/user-settings-light_iqpdjh.png)] dark:bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1717158629/email_assets/user-settings-dark_dtg6nv.png)] bg-no-repeat bg-contain bg-center" />
                    </Column>
                  </Row>
                </Section>
              </Container>
              <Container className="mx-auto w-full max-w-[293px]">
                <Text className="text-[#4A4A4A] dark:text-[#E7E7E7] text-lg font-medium text-center">Reset Your Password</Text>
                <Text className="text-[#7F7F7F] dark:text-[#A9A9A9] text-base font-medium text-center">Click the button below to reset your password and sign in</Text>
              </Container>
              <Section className="text-center mt-20">
                <Button className="mx-auto cursor-pointer py-3 px-32 text-center rounded-lg bg-[#09090B] dark:bg-white text-white dark:text-black text-sm font-medium">Reset Password</Button>
              </Section>
            </Container>
            <Container className="mt-[173px] mx-auto w-full items-center">
              <Text className="text-[#7F7F7F] dark:text-[#A9A9A9] text-base m-0 text-center font-medium">inspired.</Text>
              <Text className="text-[#7F7F7F] dark:text-[#A9A9A9] text-base m-0 text-center font-medium">Until next time,</Text>
            </Container>
            <Container className="mb-10 mt-10 mx-auto w-full h-[70px] min-h-[70px]">
              <Container className="bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1714497110/workspace_invite_assests/Vector_White_mvjz4f.png)] dark:bg-[url(https://res.cloudinary.com/joinvalley/image/upload/v1714497109/workspace_invite_assests/Vector_Black_edqjyx.png)] bg-no-repeat bg-cover bg-center w-[54px] h-[50px] min-w-[54px] min-h-[50px]" />
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
