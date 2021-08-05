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

     //sub calculation
     public function subCalculator($date)
     {
          $today = strtotime("now");
          $due_date = strtotime($date);
          $hours = $due_date - $today;
          $hours = $hours/3600;
          $time_left = $hours / 24;
          return $time_left;
     }


}
