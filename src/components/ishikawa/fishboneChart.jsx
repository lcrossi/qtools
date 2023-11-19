import React from 'react'
import Fishbone from '@hophiphip/react-fishbone';

export default function FishboneChart({propsIsh}) {
    
    return (
        <Fishbone
            items={propsIsh}
            wrapperStyle={{ 
                width: '100%', 
                height: 500,
            }}
        />
    )
}