<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    /*###################*/
    /* INDEX */
    /*###################*/

    public function Startseite()
    {
        $data = array(
            'hauptmenu' =>  true
        );
        return view('pages.Startseite')->with('data', $data);
    }

    /*###################*/
    /* IMPRESSUM */
    /*###################*/

    public function Impressum()
    {
        return view('pages.Impressum');
    }

    /*###################*/
    /* DATENSCHUTZ */
    /*###################*/

    public function Datenschutz()
    {
        return view('pages..Datenschutz');
    }
}
