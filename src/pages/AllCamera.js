import {
	Circle,
	RadioButtonChecked,
	NotificationsActive,
} from "@mui/icons-material";
import {
	Container,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	IconButton,
	Box,
} from "@mui/material";

export function AllCamera() {
	return (
		<Box maxWidth="99%" sx={{ backgroundColor: "#000", margin: 0 }}>
			<ImageList
				className="my-grid"
				cols={4}
				sx={{ margin: 0, overflowY: "unset", gap: "10px !important" }}>
				{itemData.map((item, index) => (
					<ImageListItem
						key={item.img}
						sx={{
							width: "100%",
							height: "250px !important",
							border: `${item.status === "true" ? "2" : "4"}px solid ${
								item.status === "true" ? "#357a38" : "#ef5350"
							}`,
							backgroundColor: "#000",
							position: "relative",
						}}>
						<img
							src={`${item.img}`}
							srcSet={`${item.img}`}
							alt={item.title}
							width="inherit"
							loading="lazy"
						/>
						<div class={item.alarm ? "overlay" : "none"}>
							<div class="flex">
								<Box>
									<NotificationsActive sx={{ fontSize: "60px", color: "#fff" }} />
								</Box>
								<Box
									sx={{
										fontSize: "15px",
										color: "white",
										marginTop: "15px",
										fontWeight: "600",
									}}>
									Alert
								</Box>
							</div>
						</div>
						<ImageListItemBar
							sx={{
								background:
									"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
									"rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
							}}
							title={`CAM 0${index + 1}`}
							position="top"
							actionIcon={
								<IconButton
									sx={{ color: "red" }}
									aria-label={`star ${item.title}`}
									size="small">
									<RadioButtonChecked />
								</IconButton>
							}
							actionPosition="left"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

const itemData = [
	{
		img: "https://i.ytimg.com/vi/9wxEmqyVlB8/maxresdefault.jpg",
		status: "true",
		alarm: true,
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbN8VyzKyx_o41DBxz6X10Jwlag1KWo72wcSQ-0YpaFwDMCXgM432LOzNdeZ9BZ2cafM&usqp=CAU",
		status: "true",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO6yp0mD6XOBD8R0ZSASL2KCxNWgG9H2fCbzl4TQeqi-eVcrBkSQOvmuHNVsFrA1_2Zw&usqp=CAU",
		status: "true",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO1_0g-TUIqwF3ymB8IXziuTPDVwCXUbKUEGBPd4gnP6IlPIcQOwPdocF6D5Ubn5lqc8&usqp=CAU",
		status: "true",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMY9_WVUWYY7uwaiP3RU1Z7C_qTSGSKWnDw&usqp=CAU",
		status: "true",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCRFJf8gJ1VV2DDPq4SqZyPxZ3hiiWq78UQ&usqp=CAU",
		status: "true",
	},
	{
		img: "https://i.ytimg.com/vi/9wxEmqyVlB8/maxresdefault.jpg",
		status: "true",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiPJT6AUbyypxLYv8-98uaXwuw8Fj-mdCgg&usqp=CAU",
		status: "true",
	},
	{
		img: "https://i.ytimg.com/vi/9wxEmqyVlB8/maxresdefault.jpg",
		status: "true",
	},
	{
		img: "https://cdn.osxdaily.com/wp-content/uploads/2013/12/there-is-no-connected-camera-mac.jpg",
		status: "false",
	},
	{
		img: "https://i.ytimg.com/vi/9wxEmqyVlB8/maxresdefault.jpg",
		status: "true",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7X0KdgCAK85JXh7pEFqaZ719LEt3ByP47cdcU4sj0b6cSb7TIGW01AeC8zGErR--AUpA&usqp=CAU",
		status: "true",
	},
];
