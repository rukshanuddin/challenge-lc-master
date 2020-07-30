module Api
  class TopicsController < ApplicationController
    def index
      @topics = Topic.all
    end

    def show 
      @topic = Link.where(topic_id: params[:id])
      render json: @topic
    end
  end
end