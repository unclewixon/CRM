<?php

namespace App\Imports;

use App\Models\Contact;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Carbon\Carbon;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class ContactImport implements ToModel, WithHeadingRow, WithValidation, SkipsOnError, SkipsOnFailure
{
    use Importable, SkipsErrors, SkipsFailures;
    
    public function model(array $row)
    {
        return new Employee([
            'user_id' => auth()->user()->id,
            'sur_name' => $row['sur_name'],
            'first_name' => $row['first_name'],
            'email' => $row['email'],
            'scheme' => $row['scheme'],
            'gender' => $row['gender'],
            'dob' =>  Carbon::parse($row['dob'])->format('Y-m-d')
        ]);
    }

    public function rules(): array
    {
        return [
            '*.sur_name' => ['required'],
            '*.first_name' => ['required'],
            '*.email' => ['required'],
            '*.email' => ['required'],
            '*.scheme' => ['required'],
            '*.gender' => ['required'],
            '*.dob' => ['required']
        ];
    }


}
