<?php

namespace App\Console;

use App\Console\Commands\CheckTransaction;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        CheckTransaction::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('check:transaction')->dailyAt('02:30');
        $schedule->command('check:transaction')->dailyAt('05:30');
        $schedule->command('check:transaction')->dailyAt('08:30');
        $schedule->command('check:transaction')->dailyAt('11:30');
        $schedule->command('check:transaction')->dailyAt('14:30');
        $schedule->command('check:transaction')->dailyAt('17:30');
        $schedule->command('check:transaction')->dailyAt('20:30');
        $schedule->command('check:transaction')->dailyAt('23:30');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
