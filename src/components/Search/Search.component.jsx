import React from 'react'

import { CarMakes, Pricing } from '../Shared/Data';

// react-icons
import { CiSearch } from "react-icons/ci";

// shadcn
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
  

function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full justify-between flex flex-col md:flex md:flex-row gap-2 md:gap-10 px-5 items-center w-[60%]'>
        <Select>
            <SelectTrigger className="outline-none md:border-none w-full md:w-max shadow-none text-lg">
                <SelectValue placeholder="Cars" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">New</SelectItem>
                <SelectItem value="dark">Old</SelectItem>
            </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select>
            <SelectTrigger className="outline-none md:border-none w-full md:w-max shadow-none text-lg">
                <SelectValue placeholder="Car Makes" />
            </SelectTrigger>
            <SelectContent>
                {
                    CarMakes.map((car) => (
                        <SelectItem key={car.id} value={car.name}>{car.name}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select>
            <SelectTrigger className="outline-none md:border-none w-full md:w-max shadow-none text-lg">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
                {
                    Pricing.map((price) => (
                        <SelectItem key={price.id} value={price.amount}>{price.amount}{price.symbol}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
        <CiSearch className='text-[50px] bg-[#405ef2] text-white rounded-full p-3 hover:scale-105 transition-all cursor-pointer' />
    </div>
  )
}

export default Search;
