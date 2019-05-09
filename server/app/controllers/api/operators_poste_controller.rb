module Api
  class OperatorsPosteController < ApplicationController
    def index
      @operators_poste = OperatorsPoste.all
    end

    def create
      operators_poste = OperatorsPoste.create(operators_poste_params)
      render json: operators_poste
    end

    def destroy
      OperatorsPoste.destroy(params[:id])
    end

    def update
      operators_poste = OperatorsPoste.find(params[:id])
      operators_poste.update_attributes(operators_poste_params)
      render json: operators_poste
    end

    private

    def operators_poste_params
      params.require(:operators_poste).permit(:id, :operator_id, :poste_id)
    end


  end
end
