<?php

  namespace App\Helpers;

  use App\Models\Plan;
  use App\Models\Unit;
  use Carbon\Carbon;

  class Helper
  {
    public $newDateTime;

    //set duration
     public function to($id)
     {
         $now = Carbon::now();
         $plan = Plan::find($id);
         $du = $plan->duration;
         if ($du == 1) {
            $this->newDateTime = Carbon::now()->addMonths(1);
         }elseif ($du == 3) {
            $this->newDateTime = Carbon::now()->addMonths(3);
         }elseif ($du == 6) {
            $this->newDateTime = Carbon::now()->addMonths(6);
         }elseif ($du == 12) {
            $this->newDateTime = Carbon::now()->addMonths(12);
         }else {
            $this->newDateTime = Carbon::now()->addMonths(1);
         }
         return $this->newDateTime;
     }

     //get plan cost
     public function getCost($id)
     {
         $plan = Plan::find($id);
         $cost = $plan->cost;
         return $cost;
     }

     //calculate unit cost
     public function calculateCost($id, $unit_number)
     {
          $unit = Unit::find($id);
          $cost_per_unit = $unit->cost_per_unit;
          $total = $unit_number * $unit->cost_per_unit;
          return $total;
     }

  }
