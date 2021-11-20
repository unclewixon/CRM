<?php

namespace Database\Seeders;

use App\Models\Unit;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $units = [
            ['name' => 'Premium', 'unit' => 10000, 'cost_per_unit' => 7],
            ['name' => 'Professional', 'unit' => 7000, 'cost_per_unit' => 12],
            ['name' => 'Standard', 'unit' => 4000, 'cost_per_unit' => 17],
        ];

        for($i=0; $i<count($units); $i++){
            $unit = Unit::create([
                'name' => $units[$i]['name'],
                'description' => $units[$i]['name'],
                'unit' => $units[$i]['unit'],
                'cost_per_unit' => $units[$i]['cost_per_unit'],
            ]);
        }
    }
}
