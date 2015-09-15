@extends('LoroTemplate')

@section('titel', 'LoroDialog')

@section('inhalt')
    @include('sections.Startseite')
    @include('sections.Leistungen')
    @include('sections.Projekte')
    @include('sections.Kontakt')
@endsection
