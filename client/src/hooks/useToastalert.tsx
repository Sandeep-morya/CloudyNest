import { useToast } from '@chakra-ui/react'
import React, { ReactNode } from 'react'



const useToastAlert = () => {
   const toast =  useToast()

  return (
		status: "info" | "warning" | "success" | "error" | "loading" | undefined,
		title: ReactNode,
	) => {
		toast({
			title,
			position: "top",
			status,
			isClosable: true,
			duration: 2000,
		});
	};
}

export default useToastAlert