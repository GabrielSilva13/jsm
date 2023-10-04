import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ResourceCardProps {
  title: string
  id: string
  image: string
  downloadNumber: number
  downloadLink: string
}

export const ResourceCard = ({
  title,
  image,
  downloadNumber,
  downloadLink,
}: ResourceCardProps) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={downloadLink} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              className="h-full rounded-md object-cover"
              src={image}
              alt={title}
              width={384}
              height={440}
            />
          </div>
          <CardTitle className="paragraph-semibold line-clamp-1 w-full text-left text-white">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image
            src="/downloads.svg"
            alt="ícone de download"
            width={20}
            height={20}
          />

          {downloadNumber}
        </div>

        <Link
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
          href={downloadLink}
          target="_blank"
        >
          Baixar agora{' '}
          <Image
            src="/arrow-blue.svg"
            alt="seta azul para direita"
            width={13}
            height={10}
          />
        </Link>
      </CardContent>
    </Card>
  )
}
