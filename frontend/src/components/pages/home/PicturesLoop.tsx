import React from "react";
import { Grid } from "@mui/material";
import { useFormikContext } from "formik";

export interface PicturesLoopProps {
	pictures: string[]
	isGenerated: boolean
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const PicturesLoop: React.FC<PicturesLoopProps> = (props: PicturesLoopProps) => {
	const { pictures, isGenerated } = props

	return (
		isGenerated
			? <Grid
				container
				alignContent={'space-between'}
				spacing={6}
				columns={25}
			>
				{pictures.map((picture: string) => (
					<Grid item key={picture} xs={5}>
						<img
							src={`${picture}`}
							srcSet={`${picture}`}
							style={{
								borderRadius: '1.5%'
							}}
							width={'100%'}
							loading="lazy"
							alt={`${picture}`}
						/>
					</Grid>
				))}
			</Grid>
		: null
	)
}