<?php

namespace App\Helpers;

class General
{

      //clean up string
      public function clean($string)
      {
           if (is_null($string)) {
               return "";
           }else {
               return $string;
           }
      }
      
}
