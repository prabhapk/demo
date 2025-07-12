import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CasionHeaders from '../Components/CasionHeaders'
import { CasionGamesList, CasionHeadersList } from '../Constants/CommonFlatlist'
import CasionGames from '../Components/CasionGames'

const CasinoScreen = () => {
    const [selectedHeaderId, setSelectedHeaderId] = useState(1);
    const [gameList, setGameList] = useState(CasionHeadersList);


    const handleSelectCasinoHeader = (id: number) => {
        const updatedList = gameList.map((item) => ({
            ...item,
            isSelected: item.id === id,
        }));
        setGameList(updatedList);
        setSelectedHeaderId(id);
    };

    const renderCasinoGame = () => {
        switch (selectedHeaderId) {
            case 1:
                return (
                   <CasionGames onPress={()=>{}} 
                    headerList={CasionGamesList}
                  />
                )
            case 2:
                return (
                   <CasionGames onPress={()=>{}} 
                    headerList={CasionGamesList}
                  />
                )
            default:
               return (
                   <CasionGames onPress={()=>{}} 
                    headerList={CasionGamesList}
                  />
                )
        }
    }

    return (
        <View>

            <CasionHeaders
                headerList={gameList}
                selectedId={selectedHeaderId}
                onPress={() => { }}
                onSelect={handleSelectCasinoHeader}
            />
            {renderCasinoGame()}
        </View>
    )
}

export default CasinoScreen