import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link';


export default function MovieCard({ content }) {
  return (
    <Link href={`movie/${content.id}`} size="sm" >
        <Card 
            radius='md'
            shadow="md" 
            isBlurred
            isPressable 
            isHoverable
            fullWidth
            disableRipple
            className="bg-[#eeebe7] dark:bg-[#1b1b1a] max-w-[400px] hover:scale-[1.01]"
        >
        <CardBody className="overflow-visible p-0">
            <Image
            isBlurred
            radius='none'
            shadow="sm"
            width="100%"
            alt={content.original_title}
            className="w-full object-cover sm:h-[180px]"
            src={`https://image.tmdb.org/t/p/original/${content.backdrop_path || content.poster_path}`}
            />
        </CardBody>
        <CardFooter className="h-[120px] flex flex-col">
            <h2 className="text-md font-bold text-ellipsis">
              {content.title || content.name}
            </h2>
            <p className="text-sm line-clamp-2 text-ellipsis">{content.overview}</p>
        </CardFooter>
        </Card>
    </Link>
  )
}
