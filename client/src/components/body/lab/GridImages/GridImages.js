import React, { useState, useEffect } from 'react'
import { gridMockData } from '../../../mockData/gridMockData'
import clsx from "clsx";

const GridImages = (props) => {
	// to test this component, go to
	// localhost:3000/gridimages

	const {multi,avatar,setAvatar} = props;

	const [data,setData] = useState([]);

	// const [currentFile, setCurrentFile] = useState({})
	const [id, setId] = useState('')
	const [active, setActive] = useState(false)

	const shuffleArray = (array) =>{
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;
	
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
	
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	
		return array;
	  }




	const handleGridImage = (e,id) => {
		e.preventDefault();
		//console.log(e.target,'e')
		setId(id)
		const selectImg = data?.filter(img => img.id === id)?.[0]
		setAvatar(selectImg)
	}

	const handleKeyPress = (e,id) =>{
		handleGridImage(e,id);
	}

	const handleEsc = (e) => {
		if (e.key === "Escape") {
			setAvatar({})
			setActive(false)
		};
	};

	useEffect(()=>{
		shuffleArray(gridMockData)
		gridMockData.length=15;
		setData(gridMockData);
		setActive(false)
	},[multi])

	useEffect(() => {
		if (active) {
			window.addEventListener("keydown", handleEsc);
		} else {
			window.removeEventListener("keydown", handleEsc);
		}
		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [avatar, active]);



	const gridImagesClassnames = clsx({
		"tw-cursor-pointer tw-w-full tw-rounded": true,
	});

	const gridImageClassnames = clsx({
		"tw-cursor-pointer": true,
		'tw-opacity-50 tw-border-double tw-border-8': active
	});

	console.log(avatar)
	console.log(id)
	console.log(active)
	return (
		<div class="tw-container tw-mx-auto tw-space-y-2 md:tw-space-y-0 md:tw-gap-2 md:tw-grid md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-p-2 ">
			{data?.map(data => (
				<>
					<div class={gridImagesClassnames} onClick={(e) => {
						handleGridImage(e,data.id);
						setActive(true)
					}
					} onKeyPress={(e)=>{
						handleKeyPress(e,data.id) 
						setActive(true)}}
					>
						<img tabIndex={0} 	className={avatar.id === data.id ? gridImageClassnames : ''} src={data.img} alt={data.name} />
					</div>
				</>
			))
			}
		</div >
	)
}

export default GridImages