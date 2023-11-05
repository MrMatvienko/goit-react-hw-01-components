// import React from 'react';
// import PropTypes from 'prop-types';

// export const Profile = ({ username, avatar, tag, location, stats }) => {
//   return (
//     <ProfileCard>
//       <Describtion>
//         <Avatar src={avatar} alt="User avatar" />
//         <Name>{username}</Name>
//         <Tag>{tag}</Tag>
//         <Location>{location}</Location>
//       </Describtion>
//       <StatsList>
//         <StatsItem>
//           <Label>Followers</Label>
//           <Quantity>{stats.followers}</Quantity>
//         </StatsItem>
//         <StatsItem>
//           <Label>Views</Label>
//           <Quantity>{stats.views}</Quantity>
//         </StatsItem>
//         <StatsItem>
//           <Label>Likes</Label>
//           <Quantity>{stats.likes}</Quantity>
//         </StatsItem>
//       </StatsList>
//     </ProfileCard>
//   );
// };

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };
