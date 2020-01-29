import React, { useState, useEffect } from 'react'
import {Box, Heading, Text, CheckBox, Button} from 'grommet'
import DataAccess from './DataAccess'
import MoleculeMultiplePosts from './MoleculeMultiplePosts'
import { ArrowLeft, ArrowRight } from 'react-feather';
import DataFeedControls from '../DataFeedControls';
import { postWithToken, get } from '../../../services/shell-server';
import { TOKEN } from '../../../config';

/**
* @author 
* @function DataFeed
**/

const DataFeed = () => {

    const [pageCount, setPageCount] = useState(0)
    const [fetching, setFetching] = useState(false)
    const [ pageNumber, setPageNumber ] = useState(1)
    const [multipleMediaBlockData, setMultipleMediaBlockData] = useState({ status: 'default'})

    const increment = () => {
        if(pageNumber!=pageCount){
            setPageNumber(pageNumber+1)
            getData(pageNumber);
        }
    }

    const decrement = () => {
        if(pageNumber!=1){
            setPageNumber(pageNumber-1)
            getData(pageNumber);
        }
    }

    const getData = (pageNum) => {
        setMultipleMediaBlockData({status: 'loading'});
        return get(`/posts/${pageNum}`, TOKEN)
        .then((response) => {
            setPageCount(response.data.totalPages)
            // console.log({status: 'data', posts: response.data.posts})
            setMultipleMediaBlockData({status: 'data', posts: response.data.posts});
        })
        .catch((err) => {
            setMultipleMediaBlockData({status: 'error'});
        });
    }

    useEffect(()=> {
        setFetching(true)
        getData(1)
    }, [])

    const onFilterChange = (params) => {
        console.log(params)
    }

    return (
        <Box>
            <Box direction={'row'} 
                fill={'horizontal'} 
                margin={{top: 'large'}}
            >
                <DataFeedControls onChange={onFilterChange}/>
                <DataAccess/>
            </Box>

            <Box 
                fill={'horizontal'} 
                margin={{top:'medium'}}
                direction={'row'}
                gap={'small'}
                align={'center'}
            >
                <Button 
                    plain 
                    margin={'none'}
                    onClick={decrement}
                >
                    <ArrowLeft size={16}/>
                </Button>
                <Text> showing page {pageNumber} of {pageCount} </Text>
                <Button 
                    plain
                    margin={'none'}
                    onClick={increment}
                >
                    <ArrowRight size={16}/>
                </Button>
            </Box>

            <Box margin={{top:'medium'}}>
                <MoleculeMultiplePosts
                    data={ multipleMediaBlockData }
                />
            </Box>
            
        </Box>
    )
}

export default DataFeed