const path    = require( "path" )
const express = require( 'express' );


const STATIC_ROOT = path.join( path.dirname( __dirname ), "client/build" );
const STATIC_DIRS = [ 
    STATIC_ROOT, 
    path.join( STATIC_ROOT, 'static' ) 
];
const PORT = 5000

const app    = express( )
const router = express.Router( );
const index  = path.join( STATIC_ROOT, 'index.html' );

STATIC_DIRS.forEach( 
    dir => app.use( '/static', express.static( dir ) ) 
);

router.get('/*', async ( _, res ) => 
{
  res.sendFile( index );
} );

app.use( router );

app.listen( PORT, ( ) => 
{
    console.log( index );

    console.log( `start http://localhost:${ PORT }` );
} )