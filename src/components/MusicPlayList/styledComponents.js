import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  padding-bottom: 50px;
`

export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  max-width: 1140px;
  padding-top: 50px;
`

export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 30%;
  padding: 10px 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
`

export const MusicList = styled.ul`
  padding: 0;
  width: 90%;
  margin: auto;
  max-width: 1140px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
